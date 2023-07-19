export const filterData = (query: Object, search: string): Object => {
    return Object.keys(query)
        .filter((key) => key.includes(search))
        .reduce((obj, key) => {
            obj[key] = query[key];
            return obj;
        }, {});
};

export const removeNullDataArray = (array: any[]) =>
    array.filter((arr) => arr !== null);

export const removeNullDataByFieldArray = (array: any[], field: string) =>
    array.filter((arr) => arr[field] !== null && arr[field] !== "");

export const serializeObject = (object: Object) => {
    return Object.entries(object)
        .filter(([, value]) => value)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("&");
};

export const objectUTM = (object: Object) => {
    const filterUTM = filterData(object, "utm");
    const filterFBclID = filterData(object, "fbclid");
    return { ...filterUTM, ...filterFBclID };
};

export const serializeObjectUTM = (object: Object) => {
    const filteredObject = objectUTM(object);

    return Object.entries(filteredObject)
        .filter(([, value]) => value)
        .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
        .join("&");
};

export const firstWhere = (array: any[], field: string, value: any) => {
    {
        return array.filter((item) => item[field] === value).find(Boolean);
    }
};

export const firstWhereWithIncludes = (
    array: any[],
    field: string,
    value: any,
) => {
    {
        return array.every((item) => item[field].includes(value));
    }
};

export const first = (array: any[]) => array.find(Boolean);

export const last = (array: any[]) => array[array.length - 1];

export const isAllEqual = (arr: any[]) => arr.every((val) => val === arr[0]);

export const isAllEqualWithValue = (arr: any[], value: any) =>
    arr.every((val) => val === value);

export const isAllEqualBy = (arr: any[], field: string, value: any) =>
    arr.every((val) => val[field] === value);

export const isEqual = (arr: any[], value: any) => arr.includes(value);

export const groupBy = (xs: Object[], f) => {
    return xs.reduce(
        (r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r),
        {},
    );
};

export function getUniqueListBy(a, param) {
    return a.filter(function (item, pos, array) {
        return (
            array
                .map(function (mapItem) {
                    return mapItem[param];
                })
                .indexOf(item[param]) === pos
        );
    });
}

export const sumArray = (arr: any[]): number => {
    return arr.reduce((sum, number) => sum + number, 0);
};

export const sumArrayWithSpecificValue = (
    arr: any[],
    field: any,
    value: any,
    fieldSum: any,
) => {
    return arr
        .filter((item) => item[field] === value)
        .reduce((sum, current) => sum + current[fieldSum], 0);
};
