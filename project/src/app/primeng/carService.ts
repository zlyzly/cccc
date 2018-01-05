import { Injectable } from '@angular/core';

@Injectable()
export class CarService {

    getCarsSmall() {
        let data = [
            { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
            { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
        ];
        return data;
    }

    getData() {
        let data = [
            { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
            { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
        ];
        let totals = {
            PriemNg: [],
            firstTable: [],
        };
        let PriemNg = {
            PriemNgStandBy: 0,
            PriemNgLv: 0,
            PriemNgOperability: 0,
            PriemNgisConfiguration: 0,
            PriemNgisOutputEvent: 0,
        }
        let firstTable = {
            firstTableStandBy: 0,
            firstTableLv: 0,
            firstTableOperability: 0,
            firstTableisConfiguration: 0,
            firstTableisOutputEvent: 0,
        }
        let totalsData = JSON.parse(JSON.stringify(data));
        totalsData.forEach((el: any) => {
            if (el.table === "PriemNg") {
                PriemNg.PriemNgStandBy += el.standBy;
                PriemNg.PriemNgLv += el.styleLv.length;
                PriemNg.PriemNgOperability += el.Operability.length;
                PriemNg.PriemNgisConfiguration += el.isConfiguration;
                PriemNg.PriemNgisOutputEvent += el.isOutputEvent;

            }
            if (el.table === "firstTable") {
                firstTable.firstTableStandBy += el.standBy;
                firstTable.firstTableLv += el.styleLv.length;
                firstTable.firstTableOperability += el.Operability.length;
                firstTable.firstTableisConfiguration += el.isConfiguration;
                firstTable.firstTableisOutputEvent += el.isOutputEvent;
            }
        })
        totals.PriemNg = this.pushFn(PriemNg);
        totals.firstTable = this.pushFn(firstTable);

        data.forEach((el: any) => {
            if (el.standBy === 1) {
                el.standBy = "支持";
            } else {
                el.standBy = "不支持";
            }
            if (el.isConfiguration === 1) {
                el.isConfiguration = "是";
            } else {
                el.isConfiguration = "否";
            }
            if (el.isOutputEvent === 1) {
                el.isOutputEvent = "是";
            } else {
                el.isOutputEvent = "否";
            }
            if (el.description === "") {
                el.isOutputEvent = "n/a";
            }
        });

        return {
            data: data,
            Totals: totals,
        };
    }

    pushFn(data) {
        let tempArr = [],
            tempStr = ['支持度：', '操作视觉：', '可操作性：', '可配度：', '暴露事件：', '综合：'],
            sum = 0,
            index = 0;
        for (let k in data) {
            sum += data[k];

            tempArr.push({
                desc: tempStr[index],
                totals: data[k],
            });
            index++;
        }

        tempArr.push({
            desc: tempStr[index],
            totals: sum,
        });
        return tempArr;
    }

    getTree() {
        let data = {
            "data":
            [
                {
                    "label": "Documents",
                    "data": "Documents Folder",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [{
                        "label": "Work",
                        "data": "Work Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{ "label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document" }]
                    },
                    {
                        "label": "Home",
                        "data": "Home Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{ "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }]
                    }]
                },
                {
                    "label": "Pictures",
                    "data": "Pictures Folder",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        { "label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo" },
                        { "label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo" },
                        { "label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo" }]
                },
                {
                    "label": "Movies",
                    "data": "Movies Folder",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [{
                        "label": "Al Pacino",
                        "data": "Pacino Movies",
                        "children": [{ "label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie" }]
                    },
                    {
                        "label": "Robert De Niro",
                        "data": "De Niro Movies",
                        "children": [{ "label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie" }]
                    }]
                }
            ]
        }
        return data.data;
    }
    gettree1() {
        let desc = {
            "data":
            [
                {
                    "label": "Lazy Node 0",
                    "data": "Node 0",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    // "leaf": false,
                    "children": [{
                        "label": "Work",
                        "data": "Work Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [
                            { "label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document" },
                            { "label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document" }
                        ]
                    }]
                },
                {
                    "label": "Lazy Node 1",
                    "data": "Node 1",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "leaf": false
                },
                {
                    "label": "Lazy Node 1",
                    "data": "Node 2",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "leaf": false
                }
            ]
        }
        return desc.data;
    }
}