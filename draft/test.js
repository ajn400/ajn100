const { openBrowser, goto, write, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("baidu.com");
        await write("句幽 博客园");
        await link('句幽- 博客园').exists();
        await click(link('句幽- 博客园'));
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
