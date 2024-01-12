export default {
    baseURL: process.env.NODE_ENV === 'production'
        ? 'http://127.0.0.1:5000'
        : 'http://127.0.0.1:5000',
    outputDir: 'dist2'
}