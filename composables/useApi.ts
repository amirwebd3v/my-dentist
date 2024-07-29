import type {FilterSearchItem, FilterSortItem, QueryParams} from 'l5-client'
import {L5Client, type Paginator} from 'l5-client';
import {FetchOptions, FetchResponse, ResponseType} from "ofetch";
import {useValidationStore} from "~/store/validation";




export default function useApi() {
    const appConfig = useAppConfig().api
    const client = new L5Client(appConfig.baseUrl, {headers: appConfig.headers})
    const onResponseError = async ({request, response, options}) => {
        useValidationStore().setResponse(response)
        switch (response.status) {
            case 401:
                // await useSanctumAuth().logout()
                break
            default:
                break
        }
    }

    /************************************************************/

    const get = <T = any, R extends ResponseType = "json">(route: string, option?: FetchOptions): Promise<FetchResponse<R, T>> => {
        return fetch(route, {...option, method: 'GET', onResponseError, parseResponse: JSON.parse,});
    };

    const post = async <T = any, R extends ResponseType = "json">(route: string, option?: FetchOptions): Promise<FetchResponse<R, T>> => {
        return await client.post(route, {...option, method: 'POST', onResponseError, parseResponse: JSON.parse})
    }
    //
    // const put = <T = any, R extends ResponseType = "json">(route: string, option?: FetchOptions): Promise<FetchResponse<R, T>> => {
    //     return useSanctumClient()(route, {...option, method: 'PUT', onResponseError, parseResponse: JSON.parse})
    // }
    //
    // const destroy = <T = any, R extends ResponseType = "json">(route: string, option?: FetchOptions): Promise<FetchResponse<R, T>> => {
    //     return useSanctumClient()(route, {...option, method: 'DELETE', onResponseError, parseResponse: JSON.parse})
    // }
    //

    const paginate = <T>(route: string, queryParams: QueryParams): Promise<Paginator<T>> => {
        // const params = client.buildQueryParams(queryParams)
        // return client.paginate(route, prepareQueryParams(params))
        return client.paginate<T>(route, queryParams)
    }
    //
    const all = <T>(route: string, queryParams: QueryParams): Promise<T[]> => {
        // const params = client.buildQueryParams(queryParams)
        // console.log(params)
        // console.log(prepareQueryParams(params))
        //     return useSanctumClient()(route, {params, method: 'GET', onResponseError, parseResponse: JSON.parse})
        return client.all<T>(route, queryParams)
    }

    const prepareQueryParams = ({
                                    page = 1,
                                    itemsPerPage = 10,
                                    sortBy =[]
                                }={} , search: FilterSearchItem[] = []): QueryParams => {
        // console.log('Input values:', { page, itemsPerPage, sortBy });
        let sort: FilterSortItem = {}
        // console.log(sort,sortBy)
        const sortState = reactive({})

        if (sortBy.length > 0) {
            sortBy.forEach(({key, order}) => {
                sort[key] = order
                sortState[key] = order
            })
        } else {
            sort = sortState
        }
        const result = {pagination: {page: page, perPage: itemsPerPage}}
        // console.log('Output result:', result );
        return {
            pagination: {page: page, perPage: itemsPerPage}, sort, search
        }
    }





    // return {paginate, all, get, post, put, destroy, prepareQueryParams}
    return {prepareQueryParams,paginate, all, get,post}
}