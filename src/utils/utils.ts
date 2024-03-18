//for capitalizing first letter of any string
export const capitalizeFirstLetter = (str:string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}