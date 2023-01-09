import BaseAPI from "./BaseAPI";

export function SheetAPI() {
    const getAllSheets = async () => {
        try {
            const response = await BaseAPI.get("/sheets");
            return response.data;
        } catch(error) {
            return null;
        }
    };

    return {
        getAllSheets
    }
}