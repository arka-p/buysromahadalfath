// spreadsheet.js (bisa dipisah ke file lain)
export async function GetSpreadsheetData() {
    const sheetID = "1ip37zLeU_pjK6cfOjvlnFb9PffHoZCPUW2IC4rIX40I";
    const endpoint = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json`;

    try {
        const res = await fetch(endpoint);
        const text = await res.text();
        const json = JSON.parse(text.substring(47).slice(0, -2));

        const table = json.table;
        const rows = table.rows;
        const cols = table.cols;

        const firstRowValues = rows[0].c.map(cell => cell?.v ?? "");
        const isFirstRowHeader = firstRowValues.some(val => typeof val === "string" && val.trim().length > 0);
        const headers = isFirstRowHeader
            ? firstRowValues
            : cols.map(col => col.label || `Kolom${col.id}`);

        const dataRows = isFirstRowHeader ? rows.slice(1) : rows;

        const data = dataRows.map(row => {
            const obj = {};
            row.c.forEach((cell, index) => {
                obj[headers[index]] = cell?.v ?? null;
            });
            return obj;
        });

        return data;
    } catch (error) {
        console.error("❌ Gagal mengambil data:", error);
        return [];
    }
}
