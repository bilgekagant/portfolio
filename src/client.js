import sanityClient, { SanityClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
    projectId: 'ezjoybzz',
    dataset: 'production',
    apiVersion: '',
    useCdn: true,
    token: 'sk9vw6EuS2jSQjrb1BD3MUTbuWjEIHtbU0yJH9PpyZYGd7PUsOTMorpX4MYwTlaVZNUnkacCwe9Fen1aJ2xa0uXM7plSsoNwF5OyHCeIyngIrEGzzhTN8aAofWm9JWEgDm6BrfAEkbx2vMKof1TjlCheD24w5XeupZyq1eer6aCA70DFmvFq'
})