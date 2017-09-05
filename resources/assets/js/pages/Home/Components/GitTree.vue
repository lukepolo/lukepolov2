<template>
    <section>
        <svg id="git_tree" ref="tree"></svg>
    </section>
</template>

<script>
    export default {
        data() {
          return {
            tree : null,
            circles : [],
            merge_levels : [],
            branches : [],

              merges : {},
              ag_colors : {},
              colors : {},

              default_x : 35,
              default_y: 25,
              default_r: 14,

              big_r : 27,
              vertical_multiplier : 0,
          }
        },
        mounted() {
            this.tree = Snap('#git_tree')

            // http://paletton.com/#uid=70f0u0ke9vf4TW49xJliLoCnugw
            this.colors['lines'] = {};
            this.colors.lines['0'] = 'rgb(249, 170, 139)';
            this.colors.lines['1'] = 'rgb(249, 202, 139)';
            this.colors.lines['2'] = 'rgb(94, 131, 160)';
            this.colors.lines['3'] = 'rgb(95, 171, 138)';
            this.colors.lines['4'] = 'rgb(196, 114, 81)';
            this.colors.lines['5'] = 'rgb(255, 223, 179)';

            this.draw()

            var curves = this.tree.paper.g(this.tree.paper.selectAll('.curves'));
            var lines = this.tree.paper.g(this.tree.paper.selectAll('.lines'));
            var circles = this.tree.paper.g(this.tree.paper.selectAll('circle'));
            var flip_matrix = new Snap.Matrix().scale(1, -1).translate(0, -$(this.$refs.tree).height());

            curves.transform(flip_matrix);
            lines.transform(flip_matrix);
            circles.transform(flip_matrix);

            this.tree.paper.selectAll('circle').forEach(function (elem) {
                $(elem.node).attr('old_color', $(elem.node).attr('fill'));
                elem.mouseover(function () {
                    this.animate({
                            fill: '#FFFFFF',
                            r: big_r,
                            strokeOpacity: 1
                        },
                        200,
                        mina.easeinout);
                });
                elem.mouseout(function () {
                    this.animate({
                            fill: $(this.node).attr('old_color'),
                            r: default_r,
                            strokeOpacity: .3
                        },
                        200,
                        mina.easeinout);
                });
            });
        },
        methods : {
            draw() {

                this.getMerges();

                let start_x;
                let final_x;

                let start_y;
                let end_y;

                // Draw most left line
                let treeHeight = (this.merge_levels.length + 3) * this.default_y;
                this.drawLine(this.default_x, 0, treeHeight, this.colors.lines[0]);

                $(this.$refs.tree).css('height', treeHeight);

                // draw line up till they merge
                $.each(this.branches, function(branch_index, branch) {

                    // also lets set the colors
                    if(!colors.lines[branch.horizontal_multiplier]) {
                        colors.lines[branch.horizontal_multiplier] = tinycolor.random().toHexString();
                    }

                    // If its not a timeline shift it outwards by the multiplier
                    start_x = default_x + (default_x * branch.horizontal_multiplier);

                    // If its not based off a timline merge it all the way back in!
                    if(!branch.timeline_id || branch.timeline) {
                        final_x = default_x;
                    } else { // Since its based off a timeline we need to adjust the final location by the timelines multiplier
                        // The branch can end afterwards of the timeline! so lets make sure of that
                        if(branch.end_date <= timelines[branch.timeline_id].end_date) {
                            final_x = default_x + (default_x * timelines[branch.timeline_id].horizontal_multiplier);
                        } else {
                            final_x = default_x;
                        }
                    }

                    // find out where its vertical multiplier should be
                    start_y = default_y + (default_y * branch.vertical_multiplier);
                    end_y = default_y + (default_y * branch.merge);

                    // Draw the long line up to the merge point
                    drawLine(start_x, start_y, end_y, colors.lines[branch.horizontal_multiplier]);

                    // Draw the Branch Curve
                    draw_curve(final_x, start_y - default_y, start_x, start_y, colors.lines[branch.horizontal_multiplier]);

                    // Draw Merge Curve
                    draw_curve(start_x, end_y, final_x, end_y + default_y, colors.lines[branch.horizontal_multiplier]);

                    // Draw the Branch Starting Circle
                    if(!branch.timeline) {
                        draw_circle(start_x, start_y, get_analogous(colors.lines[branch.horizontal_multiplier]), branch.id);
                    }

                });

                this.renderCircles();
            },
            getMerges() {


                console.info('branches are at 0')
                console.warn(this.branches.length)
//                // Get the proper merge levels
//                $.each(this.branches, function(branch_index, branch) {
//
//                    $.each(this.branches, (lowerBranch) => {
//
//                        if(branch.end_date > lowerBranch.start_date) {
//                            branch.merge = lowerBranch.vertical_multiplier;
//
//                            this.merges[branch.name] = branch.merge;
//                        }
//                    });
//
//                    //console.log(branch.name  + ' merges @ ' + branch.merge);
//                });
//
//                $.each(this.branches, (branch) =>  {
//                    this.findMergeConflicts(branch);
//                    this.merge_levels.push(branch.merge);
//                });
            },
            drawLine(x, start_y, end_y, color) {
                this.tree.path("M" + x + "," + start_y + " L" + x + "," + end_y + "").attr({
                    stroke: color,
                    strokeWidth: 4,
                    class: 'lines'
                });
            },
            findMergeConflicts() {
                //            console.log('Finding conflicts with ' + branch.name);

                var conflicts = [];

                $.each(branches, function()
                {
                    if(branch.id != this.id && branch.merge == this.merge)
                    {
//                    console.log('Conflicts with ' + this.name);
                        conflicts.push(this);
                    }
                });

                $.each(conflicts, function()
                {
                    if(branch.id != this.id)
                    {
                        if (branch.end_date > this.end_date)
                        {
                            move_up(branch);
                            branch.merge+= 2;
                        }
                        else
                        {
                            move_up(this);
                            this.merge = branch.merge + 2;
                        }
                    }
                });
            },
            renderCircles() {
                $.each(this.circles, (circle) => {
                    this.projects.circle(circle.x, circle.y , circle.r).attr({
                        fill: circle.color,
                        stroke: circle.color,
                        strokeOpacity: .3,
                        strokeWidth: 5,
                        'data-project_id': circle.id
                    });
                });
            }
        },
        computed : {
            projects() {
                return this.$store.state.projects.projects
            },
            timelines() {
                let timelines = {}

                _.each(_.reverse(this.projects), (project) => {

                    this.branches.push({
                        id: project.id,
                        name: project.timeline.name,
                        horizontal_multiplier: 1,
                        vertical_multiplier: 0,
                        timeline_id : project.timeline.id,
                        timeline: false,
                        start_date: project.start_date,
                        end_date: project.end_date,
                        merge: null
                    })

                    timelines[project.id] = {
                        id: project.timeline.id,
                        timeline_id: project.timeline.id,
                        name: project.timeline.name,
                        start_date: project.timeline.start_date,
                        end_date: project.timeline.end_date,
                        horizontal_multiplier: 1,
                        vertical_multiplier: 0,
                        timeline: true
                    }
                })
            }
        },
    }
</script>