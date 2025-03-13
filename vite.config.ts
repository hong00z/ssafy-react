// 공식 문서 참고 : https://ko.vitejs.dev/config/server-options.html
import { defineConfig } from "vite";

const viteConfig = defineConfig({
    // dev server
    server : {
        port : 3000,
    },
    // preview server
    preview : {
        port : 3010,
    }
})
export default viteConfig