<template>
    <section>
        <svg id="git_tree" ref="tree"></svg>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                tree: null,
                circles: [],
                timelines: {},

                // http://paletton.com/#uid=70f0u0ke9vf4TW49xJliLoCnugw
                colors: {
                    lines: [
                        'rgb(249, 170, 139)',
                        'rgb(249, 202, 139)',
                        'rgb(94, 131, 160)',
                        'rgb(95, 171, 138)',
                        'rgb(196, 114, 81)',
                        'rgb(255, 223, 179)',
                        'rgb(148, 180, 205)',
                    ]
                },
                mergeLevels: [],
                branches: [],

                merges: {},
                agColors: {},

                defaultX: 35,
                defaultY: 25,
                defaultRadius: 14,

                bigRadius: 27,
                currentVerticalPosition: 0,
            }
        },
        mounted() {
            this.tree = Snap('#git_tree')
        },
        watch: {
            'projects': function () {
                this.setupTree()
            }
        },
        methods: {
            setupTree() {
                this.createBranchesAndTimelines()
                this.createTree()

                let flip_matrix = new Snap.Matrix()
                    .scale(1, -1)
                    .translate(0, -$(this.$refs.tree).height());

                this.tree.paper
                    .g(this.tree.paper.selectAll('.curves'))
                    .transform(flip_matrix);

                this.tree.paper
                    .g(this.tree.paper.selectAll('.lines'))
                    .transform(flip_matrix);

                this.tree.paper
                    .g(this.tree.paper.selectAll('circle'))
                    .transform(flip_matrix)

                this.tree.paper.selectAll('circle').forEach((circle) => {
                    $(circle.node).attr('old_color', $(circle.node).attr('fill'));
                    circle.mouseover(() => {
                        circle.animate({
                                fill: '#FFFFFF',
                                r: this.bigRadius,
                                strokeOpacity: 1
                            },
                            200,
                            mina.easeinout);

                        let projectId = $(circle.node).data('project_id')
                        $('div[data-project_id="'+projectId+'"]').closest('.project').css('opacity', 1)
                    });
                    circle.mouseout(() => {
                        circle.animate({
                                fill: $(circle.node).attr('old_color'),
                                r: this.defaultRadius,
                                strokeOpacity: .3
                            },
                            200,
                            mina.easeinout);

                        let projectId = $(circle.node).data('project_id')
                        $('div[data-project_id="'+projectId+'"]').closest('.project').css('opacity', '')
                    })
                    circle.click(() => {
                        let projectId = $(circle.node).data('project_id')
                        this.$store.commit('projects/set', _.find(this.projects, { id : projectId }))
                        this.scrollToTop(500)
                    })
                });
            },
            createTree() {

                let startX;
                let finalX;
                let startY;
                let end_y;

                let treeHeight = (_.max(this.mergeLevels) + 3) * this.defaultY;

                // git tree base line
                this.drawLine(this.defaultX, 0, treeHeight, this.colors.lines[0]);

                $(this.$refs.tree).css('height', treeHeight);

                _.each(this.branches, (branch) => {

//                    console.warn(branch.name)
//                    console.info('      Start Vertical Position @ ' + branch.vertical_position)
//                    console.info('      End Vertical Position @ ' + branch.merge)
//                    console.info('      Left x ' + branch.horizontal_position)

                    let branchColor = this.getBranchColor(branch);

                    startX = this.defaultX + (this.defaultX * branch.horizontal_position);

                    finalX = this.getBranchMergePosition(branch)

                    end_y = this.defaultY + (this.defaultY * branch.merge);
                    startY = this.defaultY + (this.defaultY * branch.vertical_position);

                    // outwards merge curve
                    this.drawCurve(finalX, startY - this.defaultY, startX, startY, branchColor);

                    // branch line
                    this.drawLine(startX, startY, end_y, branchColor);

                    // inwards merge curve
                    this.drawCurve(startX, end_y, finalX, end_y + this.defaultY, branchColor);

                    // project circle
                    if (!branch.timeline) {
                        this.drawCircle(startX, startY, this.getAnalogousColor(branchColor), branch.id);
                    }
                });

                this.renderCircles();
            },
            /*
            |--------------------------------------------------------------------------
            | Branch Functions
            |--------------------------------------------------------------------------
            |
            */
            createBranchesAndTimelines() {

                _.each(_.reverse(this.projects), (project) => {

                    this.branches.push({
                        merge: null,
                        timeline: false,
                        vertical_position: 0,
                        horizontal_position: 1,
                        timeline_id: project.timeline ? project.timeline.id : null,

                        id: project.id,
                        name: project.name,
                        end_date: project.end_date,
                        start_date: project.start_date,
                    })

                    if (project.timeline) {
                        this.timelines[project.timeline.id] = {
                            merge: null,
                            timeline: true,
                            vertical_position: 0,
                            horizontal_position: 1,
                            timeline_id: project.timeline.id,

                            id: project.timeline.id,
                            name: project.timeline.name,
                            end_date: project.timeline.end_date,
                            start_date: project.timeline.start_date,
                        }
                    }

                })

                // putting the timelines into the branches
                _.each(this.timelines, (timeline) => {
                    _.each(this.branches, (branch, branch_index) => {
                        if (branch.start_date > timeline.start_date) {
                            this.branches.splice(branch_index, 0, timeline);
                            return false;
                        }
                    });
                });


                this.getBranchesMultipliers();
            },
            getBranchesMultipliers() {

                _.each(this.branches, (branch, branch_index) => {

                    if (branch_index !== 0) {
                        this.currentVerticalPosition += 2;
                    }

                    branch.vertical_position = ++this.currentVerticalPosition;

                    _.each(this.branches, (tempBranch) => {
                        if (branch.id !== tempBranch.id) {
                            if (
                                (
                                    branch.start_date >= tempBranch.start_date &&
                                    branch.start_date <= tempBranch.end_date
                                ) ||
                                (
                                    branch.end_date >= tempBranch.start_date &&
                                    branch.end_date <= tempBranch.end_date
                                )
                            ) {
                                // Makes sure its not a timeline
                                if (!branch.timeline_id && !branch.timeline) {
                                    if(branch.horizontal_position < tempBranch.horizontal_position) {
                                        branch.horizontal_position = tempBranch.horizontal_position
                                    }
                                    branch.horizontal_position++;
                                }
                                // Makes sure both have a timeline id but not an actual timeline
                                else if (branch.timeline_id && tempBranch.timeline_id && !branch.timeline) {
                                    if(branch.horizontal_position < tempBranch.horizontal_position) {
                                        branch.horizontal_position = tempBranch.horizontal_position
                                    }
                                    branch.horizontal_position++;
                                }
                                // Makes sure both are timelines
                                else if (branch.timeline && tempBranch.timeline) {
                                    if (
                                        branch.start_date >= tempBranch.start_date &&
                                        branch.start_date <= tempBranch.end_date
                                    ) {
                                        if(branch.horizontal_position < tempBranch.horizontal_position) {
                                            branch.horizontal_position = tempBranch.horizontal_position
                                        }
                                        branch.horizontal_position++;
                                    }
                                }
                            }
                        }
                    });
                });

                this.getBranchMerges();
            },
            getBranchMerges() {
                _.each(this.branches, (branch) => {
                    _.each(this.branches, (lowerBranch) => {
                        if (branch.end_date > lowerBranch.start_date) {
                            branch.merge = lowerBranch.vertical_position;

                            this.merges[branch.name] = branch.merge;
                        }
                    });
                });

                _.each(this.branches, (branch) => {
                    this.findMergeConflicts(branch);
                    this.mergeLevels.push(branch.merge);
                });
            },
            findMergeConflicts(branch) {
                let conflicts = [];

                _.each(this.branches, (tempBranch) => {
                    if (branch.id !== tempBranch.id && branch.merge === tempBranch.merge) {
                        conflicts.push(tempBranch);
                    }
                });

                _.each(conflicts, (conflict) => {
                    if (branch.id !== conflict.id) {
                        if (branch.end_date > conflict.end_date) {
                            this.moveUp(branch);
                            branch.merge += 2;
                        }
                        else {
                            this.moveUp(conflict);
                            conflict.merge = branch.merge + 2;
                        }
                    }
                });
            },
            moveUp(branch) {
                _.each(this.branches, (tempBranch) => {
                    if (tempBranch.vertical_position > branch.merge) {
                        tempBranch.vertical_position += 2;
                        tempBranch.merge += 2;
                    }
                    else if (this.end_date > branch.end_date) {
                        tempBranch.merge += 2;
                    }
                });
            },
            getBranchColor(branch) {
                if (!this.colors.lines[branch.horizontal_position]) {
                    this.colors.lines[branch.horizontal_position] = this.generateNewColor();
                }

                return this.colors.lines[branch.horizontal_position]
            },
            getBranchMergePosition(branch) {
                if (branch.timeline_id && !branch.timeline) {
                    if (branch.end_date <= this.timelines[branch.timeline_id].end_date) {
                        return this.defaultX + (this.defaultX * this.timelines[branch.timeline_id].horizontal_position);
                    }
                }
                return this.defaultX;
            },
            /*
            |--------------------------------------------------------------------------
            | Color Helpers
            |--------------------------------------------------------------------------
            |
            */
            getAnalogousColor(color) {
                if (!this.agColors[color]) {
                    this.agColors[color] = tinycolor(color).analogous(15).map(function (t) {
                        return t.toHexString();
                    });
                }
                this.agColors[color].shift();
                return this.agColors[color].shift();
            },
            generateNewColor() {
                return tinycolor.random().toHexString()
            },
            /*
            |--------------------------------------------------------------------------
            | SVG Helpers
            |--------------------------------------------------------------------------
            |
            */
            drawLine(x, startY, end_y, color) {
                this.tree.path("M" + x + "," + startY + " L" + x + "," + end_y + "").attr({
                    stroke: color,
                    strokeWidth: 4,
                    class: 'lines'
                });
            },
            drawCurve(start_x, startY, end_x, end_y, color) {
                let break_point = (startY + end_y) / 2;

                // Curved Lines to new path
                this.tree.path("M" + start_x + "," + startY + " C" + start_x + "," + break_point + " " + end_x + "," + break_point + " " + end_x + "," + end_y + "").attr({
                    stroke: color,
                    strokeWidth: 4,
                    fill: "none",
                    class: 'curves'
                });
            },
            drawCircle(x, y, color, id) {
                //start Circle
                this.circles.push({
                    x: x,
                    y: y,
                    r: this.defaultRadius,
                    color: color,
                    id: id
                });
            },
            renderCircles() {
                _.each(this.circles, (circle) => {
                    this.tree.circle(circle.x, circle.y, circle.r).attr({
                        fill: circle.color,
                        stroke: circle.color,
                        strokeOpacity: .3,
                        strokeWidth: 5,
                        'data-project_id': circle.id
                    });
                });
            },
        },
        computed: {
            projects() {
                return this.$store.state.projects.projects
            }
        }
        ,
    }
</script>