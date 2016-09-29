import Custom from './components/custom';
export function routes (router) {
    router.map({
        '/': {
            name: 'root',
            component: Custom
        }
    )
}