import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

export default {
  computed: {
    createdDateDisplay() {
      return dayjs(this.blog.created_at).format(
        "dddd, MMMM Do YYYY, h:mm:ss a",
      );
    },
  },
};
