### Google

This is a google clone UI that searches and get results back from the [Google API](https://developers.google.com/custom-search/v1/using_rest) and the [Programable Search Engine](https://cse.google.com/cse/all)

For more about the GOOGLE API Read [this](https://developers.google.com/custom-search/v1/using_rest)

1. Get the API key(s) and put them in the `.env.local` file.

`.env.local`

```
PROGRAMABLE_SEARCH_ENGINE_ID = YOUR_ID
GOOGLE_CUSTOM_SEARCH_API = YOUR_GOOGLE_CUSTOM_API_KEY
```

## Making Request to search engines.

Request will be made at https://www.googleapis.com/customsearch/v1?[parameters]
