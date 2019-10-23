const honeyList = [
    {
        id: 'buckwheat', //гречичный
        name: 'гречичный',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        count: '3',
        unit: 'литр',
        price: 2980,
        min: 1,
        max: 14 //остаток
    },
    {
        id: 'buckwheat', //гречичный
        name: 'гречичный',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        count: '2',
        unit: 'литр',
        price: 1950,
        min: 1,
        max: 20 //остаток
    },
    {
        id: 'buckwheat', //гречичный
        name: 'гречичный',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        count: '1',
        unit: 'литр',
        price: 980,
        min: 1,
        max: 57 //остаток
    },
    {
        id: 'buckwheat', //гречичный
        name: 'гречичный',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        count: '0,5',
        unit: 'литр',
        price: 540,
        min: 1,
        max: 50 //остаток
    },
    {
        id: 'buckwheat', //гречичный
        name: 'гречичный',
        description: 'Много описания мёда, какой он хороший и прочее, но вообще я не очень его ем, так изредка',
        count: '0,3',
        unit: 'литр',
        price: 320,
        min: 1,
        max: 31 //остаток
    }
];


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