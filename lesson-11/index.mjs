import TabBox from "./lib/TabBox.mjs";

const tabBoxTest = new TabBox("#tab-box-test", { wrapperClassName: "tab-1" });
const tabBoxContent = new TabBox("#tab-box-content", { wrapperClassName: "tab-2" });
const tabBoxBlog = new TabBox("#tab-box-blog", { wrapperClassName: "tab-3" });

tabBoxTest.init();
tabBoxContent.init();
tabBoxBlog.init();