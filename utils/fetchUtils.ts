type METHOD = 'GET' | 'POST';

export interface StoreFetchProps<T> {
  url: string;
  method: METHOD;
  body?: T;
}

export interface APIResult<T> {
  status: number;
  body: T;
}

export function storeFetch<T extends undefined, R>(props: StoreFetchProps<T>): Promise<APIResult<R>> {
  return fetch(props.url, {
    method: props.method,
    body: props.body,
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error(`Failed to fetch (${res.status}, ${res.statusText})`);
    })
    .then((res) => {
      return {
        status: 200,
        body: res,
      };
    })
    .catch((err) => {
      return {
        status: 500,
        body: err.message,
      };
    });
}
