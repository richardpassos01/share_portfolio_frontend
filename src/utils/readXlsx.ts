import * as XLSX from 'xlsx';

const readXlsx = async (file: File): Promise<any[] | undefined> => {
  try {
    const bufferArray = await readFileAsArrayBuffer(file);
    const data = parseExcelData(bufferArray);
    return data;
  } catch (error) {
    console.error('Error reading Excel file:', error);
  }
};

const readFileAsArrayBuffer = (file: File): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e) => resolve(e.target?.result as ArrayBuffer);
    fileReader.onerror = (error) => reject(error);
  });
};

const parseExcelData = (bufferArray: ArrayBuffer) => {
  const wb = XLSX.read(bufferArray, { type: 'buffer' });
  const wsname = wb.SheetNames[0];
  const ws = wb.Sheets[wsname];
  return XLSX.utils.sheet_to_json(ws);
};

export default readXlsx;
