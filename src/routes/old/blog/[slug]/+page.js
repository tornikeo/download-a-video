import { dev } from '$app/environment';

export function load({ params }) {
    console.log(params, params.slug, params['some']);
    return {
        slug: params.slug
    }
}