//Design Data Exporter Class
//Problem: Build a data export system where the abstract class provides 
//shared validation logic, and subclasses handle the actual export format.

//Requirements:

//Abstract DataExporter class with: a concrete validate(data) method that checks if data is not null/empty and prints a validation message,
//plus an abstract export(data) method
//CSVExporter: formats data as comma-separated values
//JSONExporter: formats data as a JSON array
//The validate() method should be called inside export() before formatting, so all exporters validate automatically

abstract class DataExporter {
    validate(data: string[]): boolean {
        if (!data || data.length === 0) {
            console.log("Export failed: No data to export.");
            return false;
        }
        console.log(`Validation passed. Exporting ${data.length} records.`);
        return true;
    }
     abstract export(data :string[]):void;
}
class CSVExporter extends DataExporter{
    export(data:string []):void{
         if(!this.validate(data)){
            console.log("CSV " + data.join(","))
         }
    }
}

class  JSONExporter extends DataExporter{
    export(data: string[]): void {
        if (!this.validate(data)) return;
        const items = data.map(item => `"${item}"`).join(", ");
        console.log(`JSON: [${items}]`);
    }
}

// usecase
const csv = new CSVExporter();
csv.export(["Alice", "Bob", "Charlie"]);

console.log();

const json = new JSONExporter();
json.export(["Alice", "Bob", "Charlie"]);

console.log();

csv.export([]); // Should fail validation