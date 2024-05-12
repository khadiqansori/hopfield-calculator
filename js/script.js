let realTotalBobot = []

$( "#form-pola" ).on( "submit", function( e ) {
    e.preventDefault();

    $('#menentukan-bobot').removeClass('invisible');
    $('#pengujian').removeClass('invisible');

    const arrPola1 = []
    const arrPola2 = []
    
    const arrBobot1 = []
    const arrBobot2 = []
    
    const totalBobot = []

    let pola1 = document.querySelectorAll('[name=pola1')
    let pola2 = document.querySelectorAll('[name=pola2')

    pola1.forEach(element => {
        toInt = parseInt(element.value)

        arrPola1.push(toInt)
    });

    pola2.forEach(element => {
        toInt = parseInt(element.value)

        arrPola2.push(toInt)
    });
    
    // Target Bobot 
    $('#table-target-bobot').empty();
    for (let a = 0; a < 4; a++) {
        let td = ""
        
        no = a+1
        td += `<td><b>`+ no +`</b></td>`
    
        for (let b = 0; b < 4; b++) {
            wa = a+1
            wb = b+1

            if (a == b) {
                td += `<td class='text-danger'>0</td>`
            } else {
                td += `<td>W`+ wa + wb +`</td>`
            }
        }
    
        $('#table-target-bobot').append(`<tr>` + td + `</tr>`)
    }
    
    // Pola 1
    $('#table-pola1').empty();
    for (let index = 0; index < arrPola1.length; index++) {
        const no = index+1
        const element = arrPola1[index];
        
        $('#table-pola1').append(`<tr>
            <td>X`+ no +`</td>
            <td>`+ element +`</td>
        </tr>`)
    }

    // Bobot Pola 1
    $('#table-bobot-pola1').empty();
    for (let a = 0; a < arrPola1.length; a++) {
        let td = ""
        let tempArr = []
        
        no = a+1
        td += `<td><b>`+ no +`</b></td>`
    
        for (let b = 0; b < arrPola1.length; b++) {
            if (a == b) {
                tempArr.push(0)
                td += `<td class='text-danger'>0</td>`
            } else {
                let total = arrPola1[a] * arrPola1[b]

                tempArr.push(total)
                td += `<td>`+ total +`</td>`
            }
        }
    
        arrBobot1.push(tempArr)
        $('#table-bobot-pola1').append(`<tr>` + td + `</tr>`)
    }

    // Pola 2
    $('#table-pola2').empty();
    for (let index = 0; index < arrPola2.length; index++) {
        const no = index+1
        const element = arrPola2[index];
        
        $('#table-pola2').append(`<tr>
            <td>X`+ no +`</td>
            <td>`+ element +`</td>
        </tr>`)
    }

    // Bobot Pola 2
    $('#table-bobot-pola2').empty();
    for (let a = 0; a < arrPola2.length; a++) {
        let td = ""
        let tempArr = []
        
        no = a+1
        td += `<td><b>`+ no +`</b></td>`
    
        for (let b = 0; b < arrPola2.length; b++) {
            if (a == b) {
                tempArr.push(0)
                td += `<td class='text-danger'>0</td>`
            } else {
                let total = arrPola2[a] * arrPola2[b]

                tempArr.push(total)
                td += `<td>`+ total +`</td>`
            }
        }
    
        arrBobot2.push(tempArr)
        $('#table-bobot-pola2').append(`<tr>` + td + `</tr>`)
    }

    // Jumlah Bobot
    $('#table-jumlah-bobot').empty();
    for (let a = 0; a < 4; a++) {
        let td = ""
        let tempArr = []

        no = a+1
        td += `<td><b>`+ no +`</b></td>`

        for (let b = 0; b < 4; b++) {
            valueA = arrBobot1[a][b]
            valueB = arrBobot2[a][b]

            jumlah = valueA+valueB
            tempArr.push(jumlah)
            td += `<td>`+ jumlah +`</td>`
        }

        totalBobot.push(tempArr)
        $('#table-jumlah-bobot').append(`<tr>` + td + `</tr>`)
    }


    realTotalBobot = totalBobot
});

$( "#form-pengujian-pola" ).on( "submit", function( e ) {
    e.preventDefault();

    $('#aktivasi-node').removeClass('invisible');
    $('#aktivasi-node1').removeClass('invisible');
    $('#aktivasi-node2').removeClass('invisible');
    $('#aktivasi-node3').removeClass('invisible');
    $('#aktivasi-node4').removeClass('invisible');
    $('#hasil-aktivasi').removeClass('invisible');

    const arrPola1 = []
    const arrPola2 = []

    const totalActive1 = []
    const totalActive2 = []

    let pola1 = document.querySelectorAll('[name=pengujian-pola1')
    let pola2 = document.querySelectorAll('[name=pengujian-pola2')

    pola1.forEach(element => {
        toInt = parseInt(element.value)

        arrPola1.push(toInt)
    });

    pola2.forEach(element => {
        toInt = parseInt(element.value)

        arrPola2.push(toInt)
    });

    $('#table-colorized').empty();
    for (let a = 0; a < realTotalBobot.length; a++) {
        let td = ""

        no = a+1
        td += `<td><b>`+ no +`</b></td>`
        for (let b = 0; b < realTotalBobot[a].length; b++) {
            let bg = ""
            if (b == 0) {
                bg = "bg-primary"
            } else if (b == 1) {
                bg = "bg-success"
            } else if (b == 2) {
                bg = "bg-info"
            } else if (b == 3) {
                bg = "bg-danger"
            }

            td += `<td class="`+ bg +` text-white">`+ realTotalBobot[a][b] +`</td>`
        }

        $('#table-colorized').append(`<tr>` + td + `</tr>`)
    }

    // bobot aktivasi1
    $('#table-nilai-bobot1-aktivasi1').empty();
    let span1 = ""
    let totalSpan1 = 0

    for (let a = 0; a < realTotalBobot.length; a++) {
        let td = ""
        const ap = arrPola1[a]

        td += `<td>`+ ap +`</td>`
        for (let b = 0; b < realTotalBobot[a].length; b++) {
            if (b == 0) {
                const rb = realTotalBobot[a][b];

                td += `<td>`+ rb +`</td>`
                span1 += `(`+ ap +` x `+ rb +`)+`
                totalSpan1 += ap*rb
            }
        }

        $('#table-nilai-bobot1-aktivasi1').append(`<tr>` + td + `</tr>`)
    }
    $('#total-nilai-bobot1-aktivasi1').html(`= Σ(`+ span1.substring(0,span1.length-1) +`) <br/> = ` + totalSpan1)
    totalActive1.push(totalSpan1)

    $('#table-nilai-bobot1-aktivasi2').empty();
    let span2 = ""
    let totalSpan2 = 0

    for (let a = 0; a < realTotalBobot.length; a++) {
        let td = ""
        const ap = arrPola1[a]

        td += `<td>`+ ap +`</td>`
        for (let b = 0; b < realTotalBobot[a].length; b++) {
            if (b == 1) {
                const rb = realTotalBobot[a][b];

                td += `<td>`+ rb +`</td>`
                span2 += `(`+ ap +` x `+ rb +`)+`
                totalSpan2 += ap*rb
            }
        }

        $('#table-nilai-bobot1-aktivasi2').append(`<tr>` + td + `</tr>`)
    }
    $('#total-nilai-bobot1-aktivasi2').html(`= Σ(`+ span2.substring(0,span2.length-1) +`) <br/> = ` + totalSpan2)
    totalActive1.push(totalSpan2)

    $('#table-nilai-bobot1-aktivasi3').empty();
    let span3 = ""
    let totalSpan3 = 0

    for (let a = 0; a < realTotalBobot.length; a++) {
        let td = ""
        
        const ap = arrPola1[a]
        td += `<td>`+ ap +`</td>`
        for (let b = 0; b < realTotalBobot[a].length; b++) {
            if (b == 2) {
                const rb = realTotalBobot[a][b];

                td += `<td>`+ rb +`</td>`
                span3 += `(`+ ap +` x `+ rb +`)+`
                totalSpan3 += ap*rb
            }
        }

        $('#table-nilai-bobot1-aktivasi3').append(`<tr>` + td + `</tr>`)
    }
    $('#total-nilai-bobot1-aktivasi3').html(`= Σ(`+ span3.substring(0,span3.length-1) +`) <br/> = ` + totalSpan3)
    totalActive1.push(totalSpan3)

    $('#table-nilai-bobot1-aktivasi4').empty();
    let span4 = ""
    let totalSpan4 = 0

    for (let a = 0; a < realTotalBobot.length; a++) {
        let td = ""
        
        const ap = arrPola1[a]
        td += `<td>`+ ap +`</td>`
        for (let b = 0; b < realTotalBobot[a].length; b++) {
            if (b == 3) {
                const rb = realTotalBobot[a][b];

                td += `<td>`+ rb +`</td>`
                span4 += `(`+ ap +` x `+ rb +`)+`
                totalSpan4 += ap*rb
            }
        }

        $('#table-nilai-bobot1-aktivasi4').append(`<tr>` + td + `</tr>`)
    }
    $('#total-nilai-bobot1-aktivasi4').html(`= Σ(`+ span4.substring(0,span4.length-1) +`) <br/> = ` + totalSpan4)
    totalActive1.push(totalSpan4)

    // bobot aktivasi2
    $('#table-nilai-bobot2-aktivasi1').empty();
    let span21 = ""
    let totalSpan21 = 0

    for (let a = 0; a < realTotalBobot.length; a++) {
        let td = ""
        const ap = arrPola2[a]

        td += `<td>`+ ap +`</td>`
        for (let b = 0; b < realTotalBobot[a].length; b++) {
            if (b == 0) {
                const rb = realTotalBobot[a][b];

                td += `<td>`+ rb +`</td>`
                span21 += `(`+ ap +` x `+ rb +`)+`
                totalSpan21 += ap*rb
            }
        }

        $('#table-nilai-bobot2-aktivasi1').append(`<tr>` + td + `</tr>`)
    }
    $('#total-nilai-bobot2-aktivasi1').html(`= Σ(`+ span21.substring(0,span21.length-1) +`) <br/> = ` + totalSpan21)
    totalActive2.push(totalSpan21)

    $('#table-nilai-bobot2-aktivasi2').empty();
    let span22 = ""
    let totalSpan22 = 0

    for (let a = 0; a < realTotalBobot.length; a++) {
        let td = ""
        const ap = arrPola2[a]

        td += `<td>`+ ap +`</td>`
        for (let b = 0; b < realTotalBobot[a].length; b++) {
            if (b == 1) {
                const rb = realTotalBobot[a][b];

                td += `<td>`+ rb +`</td>`
                span22 += `(`+ ap +` x `+ rb +`)+`
                totalSpan22 += ap*rb
            }
        }

        $('#table-nilai-bobot2-aktivasi2').append(`<tr>` + td + `</tr>`)
    }
    $('#total-nilai-bobot2-aktivasi2').html(`= Σ(`+ span22.substring(0,span22.length-1) +`) <br/> = ` + totalSpan22)
    totalActive2.push(totalSpan22)

    $('#table-nilai-bobot2-aktivasi3').empty();
    let span23 = ""
    let totalSpan23 = 0

    for (let a = 0; a < realTotalBobot.length; a++) {
        let td = ""
        
        const ap = arrPola2[a]
        td += `<td>`+ ap +`</td>`
        for (let b = 0; b < realTotalBobot[a].length; b++) {
            if (b == 2) {
                const rb = realTotalBobot[a][b];

                td += `<td>`+ rb +`</td>`
                span23 += `(`+ ap +` x `+ rb +`)+`
                totalSpan23 += ap*rb
            }
        }

        $('#table-nilai-bobot2-aktivasi3').append(`<tr>` + td + `</tr>`)
    }
    $('#total-nilai-bobot2-aktivasi3').html(`= Σ(`+ span23.substring(0,span23.length-1) +`) <br/> = ` + totalSpan23)
    totalActive2.push(totalSpan23)

    $('#table-nilai-bobot2-aktivasi4').empty();
    let span24 = ""
    let totalSpan24 = 0

    for (let a = 0; a < realTotalBobot.length; a++) {
        let td = ""
        
        const ap = arrPola2[a]
        td += `<td>`+ ap +`</td>`
        for (let b = 0; b < realTotalBobot[a].length; b++) {
            if (b == 3) {
                const rb = realTotalBobot[a][b];

                td += `<td>`+ rb +`</td>`
                span24 += `(`+ ap +` x `+ rb +`)+`
                totalSpan24 += ap*rb
            }
        }

        $('#table-nilai-bobot2-aktivasi4').append(`<tr>` + td + `</tr>`)
    }
    $('#total-nilai-bobot2-aktivasi4').html(`= Σ(`+ span24.substring(0,span24.length-1) +`) <br/> = ` + totalSpan24)
    totalActive2.push(totalSpan24)

    $('#table-hasil-aktivasi1').empty();
    for (let a = 0; a < arrPola1.length; a++) {
        let td = ""
        for (let b = 0; b < totalActive1.length; b++) {
            if (a == b) {
                td += `<td>`+ arrPola1[a] +`</td>`
                td += `<td>`+ totalActive1[b] +`</td>`

                if (totalActive1[b] > 0) {
                    td += `<td>1</td>`
                } else if (totalActive1[b] <= 0) {
                    td += `<td>0</td>`
                }
            }
        }

        $('#table-hasil-aktivasi1').append(`<tr>`+ td +`</tr>`)
    }

    $('#table-hasil-aktivasi2').empty();
    for (let a = 0; a < arrPola2.length; a++) {
        let td = ""
        for (let b = 0; b < totalActive1.length; b++) {
            if (a == b) {
                td += `<td>`+ arrPola2[a] +`</td>`
                td += `<td>`+ totalActive1[b] +`</td>`

                if (totalActive1[b] > 0) {
                    td += `<td>1</td>`
                } else if (totalActive1[b] <= 0) {
                    td += `<td>0</td>`
                }
            }
        }

        $('#table-hasil-aktivasi2').append(`<tr>`+ td +`</tr>`)
    }
})