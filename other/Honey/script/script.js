// function handleFileSelect(evt) {
//     let workbook = XLSX.read(data, {type: 'binary'});
//     //Get the files from Upload control
//     let first_sheet_name = workbook.SheetNames[0];
//     let files = evt.target.files;
//     let i, f;
//     //Loop through files
//     for (let i = 0, f = files[i]; i != files.length; ++i) {
//         let reader = new FileReader();
//         let name = f.name;
//         reader.onload = function (evt) {
//             let data = evt.target.result;
//
//             let result;
//             /* convert from workbook to array of arrays */
//             let first_worksheet = data.Sheets[data.SheetNames[0]];
//             data = XLSX.utils.sheet_to_json(first_worksheet, {header:1});
//             alert(result[0].Column1);
//         };
//         reader.readAsArrayBuffer(f);
//     }
// }
let ct = 0;

const addOrder = () => {
    ct++;
    document.getElementById('numberProduct').style.opacity = 1;
    document.getElementById('numberProduct').innerText = ct;
}