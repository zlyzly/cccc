export enum CompositionType {
    composition = 1,
    overlay = 2
}


export const Default_data_toolbar = {
    name: 'toolbar',
    icon: 'ion-android-refresh',
    text: ``,
    style: '',
    compositiontype: 'composition',
    content: [
        {
            name: 'group-viewdata',//tbgroup
            icon: '',
            text: `界面数据`,
            status: "3",
            order: 1,
            style: '2',
            isCollapse: 0,//在外边
            childs: [
                {
                    name: '',
                    icon: '',
                    text: '',
                    order: 1,
                    status: "3",
                    style: '2',
                    isCollapse: 0,//在外边
                    childs: [
                        {
                            name: 'refresh',
                            icon: 'ion-android-refresh',
                            text: `刷新`,
                            order: 1,
                            status: "2",
                            style: '1',
                            isCollapse: 0,//在外边
                        },
                        {
                            name: 'timedrefresh',
                            icon: 'ion-load-a',
                            text: `定时刷新`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 1,//在外边
                        },
                    ]
                },
                {
                    name: 'search',
                    icon: 'ion-ios-search',
                    text: '查询',
                    order: 1,
                    status: "3",
                    style: '2',
                    isCollapse: 0,//在外边
                },
                {
                    name: '',
                    icon: '',
                    text: '',
                    order: 1,
                    status: "3",
                    style: '2',
                    isCollapse: 0,//在外边
                    childs: [
                        {
                            name: 'add',
                            icon: 'ion-android-add',
                            text: `新增`,
                            order: 1,
                            status: "3",
                            style: '2',
                            isCollapse: 0,//在外边
                        },
                        {
                            name: 'copy',
                            icon: 'copy',
                            text: `复制`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 1,//在外边
                        },
                    ]
                },
                {
                    name: '',
                    icon: '',
                    text: '',
                    order: 1,
                    status: "3",
                    style: '2',
                    isCollapse: 0,//在外边
                    childs: [
                        {
                            name: 'save',
                            icon: 'fa fa-floppy-o',
                            text: `保存`,
                            order: 1,
                            status: "3",
                            style: '2',
                            isCollapse: 0,//在外边
                        },
                        {
                            name: 'keepin',
                            icon: 'ion-ios-box',
                            text: `暂存`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 1,//隐藏
                        },
                    ]
                },
                {
                    name: '',
                    icon: '',
                    text: '',
                    order: 1,
                    status: "3",
                    style: '2',
                    isCollapse: 0,//在外边
                    childs: [
                        {
                            name: 'submit',
                            icon: 'ion-android-done',
                            text: `提交`,
                            order: 1,
                            status: "3",
                            style: '2',
                            isCollapse: 0,//在外边
                        },
                        {
                            name: 'undo',
                            icon: 'ion-ios-undo',
                            text: `撤销`,
                            order: 2,
                            status: "3",
                            style: '1',
                            isCollapse: 1,//隐藏
                        },
                    ]
                },
                {
                    name: '',
                    icon: '',
                    text: '',
                    order: 1,
                    status: "3",
                    style: '2',
                    isCollapse: 0,//在外边
                    childs: [
                        {
                            name: 'edit',
                            icon: 'ion-edit',
                            text: `修改`,
                            order: 1,
                            status: "3",
                            style: '2',
                            isCollapse: 0,//在外边
                        },
                        {
                            name: 'repeal',
                            icon: 'ion-android-delete',
                            text: `作废`,
                            order: 2,
                            status: "3",
                            style: '1',
                            isCollapse: 0,//在外边
                        },
                    ]
                },
                {
                    name: '',
                    icon: '',
                    text: '',
                    order: 1,
                    status: "3",
                    style: '2',
                    isCollapse: 0,//在外边
                    childs: [
                        {
                            name: 'verification',
                            icon: 'ion-android-done-all',
                            text: `审核`,
                            order: 1,
                            status: "3",
                            style: '2',
                            isCollapse: 0,//在外边
                        },
                        {
                            name: 'unverification',
                            icon: 'ion-reply-all',
                            text: `反审核`,
                            order: 2,
                            status: "3",
                            style: '1',
                            isCollapse: 1,//隐藏
                        },
                    ]
                },
                {
                    name: '分享',
                    icon: 'ion-ios-search',
                    text: '分享',
                    order: 1,
                    status: "2",
                    style: '2',
                    isCollapse: 0,//在外边
                },
            ]
        },
        {
            name: 'group-association',
            icon: '',
            text: `关联`,
            status: "3",
            order: 1,
            style: '2',
            isCollapse: 0,//在外边
            childs: [
                {
                    name: '',
                    icon: '',
                    text: '',
                    order: 1,
                    status: "3",
                    style: '2',
                    isCollapse: 0,//在外边
                    childs: [
                        {
                            name: 'refresh',
                            icon: 'ion-android-refresh',
                            text: `关联对象1查询`,
                            order: 1,
                            status: "2",
                            style: '2',
                            isCollapse: 0,//在外边
                        },
                        {
                            name: 'load-a',
                            icon: 'ion-load-a',
                            text: `关联对象2查询`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 1,//隐藏
                        },
                    ]
                },
                {
                    name: '',
                    icon: '',
                    text: '',
                    order: 1,
                    status: "3",
                    style: '2',
                    isCollapse: 0,//在外边
                    childs: [
                        {
                            name: 'prestep',
                            icon: 'ion-arrow-return-left',
                            text: `上选`,
                            order: 1,
                            status: "2",
                            style: '2',
                            isCollapse: 0,//在外边
                        },
                        {
                            name: 'nextstep',
                            icon: 'ion-arrow-return-right',
                            text: `下推`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 0,//隐藏
                        },
                    ]
                },
                {
                    name: 'attachment',
                    icon: 'ion-android-attach',
                    text: `附件`,
                    order: 1,
                    status: "2",
                    style: '2',
                    isCollapse: 0,//在外边
                },
                {
                    name: 'history',
                    icon: 'history',
                    text: `历史`,
                    order: 1,
                    status: "3",
                    style: '2',
                    isCollapse: 0,//在外边
                },
            ]
        },
        {
            name: 'group-business',
            icon: '',
            text: `业务`,
            status: "3",
            order: 1,
            style: '2',
            isCollapse: 0,//在外边
            childs: [
                {
                    name: '',
                    icon: '',
                    text: '',
                    order: 1,
                    status: "3",
                    style: '2',
                    isCollapse: 0,//在外边
                    childs: [
                        {
                            name: 'forbidden',
                            icon: 'ion-locked',
                            text: `禁用`,
                            order: 1,
                            status: "3",
                            style: '2',
                            isCollapse: 0,//在外边
                        },
                        {
                            name: 'unforbidden',
                            icon: 'ion-unlocked',
                            text: `反禁用`,
                            order: 1,
                            status: "3",
                            style: '2',
                            isCollapse: 1,//在外边
                        },
                        {
                            name: 'refresh',
                            icon: 'ion-android-refresh',
                            text: `业务操作1`,
                            order: 1,
                            status: "2",
                            style: '2',
                            isCollapse: 1,//在外边
                        },
                        {
                            name: 'load-a',
                            icon: 'ion-load-a',
                            text: `业务操作2`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 1,//隐藏
                        },
                        {
                            name: 'load-a',
                            icon: 'ion-load-a',
                            text: `业务操作3`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 1,//隐藏
                        },
                    ]
                },
                {
                    name: '',
                    icon: '',
                    text: '',
                    order: 1,
                    status: "3",
                    style: '2',
                    isCollapse: 0,//在外边
                    childs: [
                        {
                            name: 'refresh',
                            icon: 'ion-android-refresh',
                            text: `业务查询1`,
                            order: 1,
                            status: "2",
                            style: '2',
                            isCollapse: 0,//在外边
                        },
                        {
                            name: 'load-a',
                            icon: 'ion-load-a',
                            text: `业务查询2`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 1,//隐藏
                        },
                        {
                            name: 'load-a',
                            icon: 'ion-load-a',
                            text: `业务查询3`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 1,//隐藏
                        },
                    ]
                },
                {
                    name: 'refresh',
                    icon: 'ion-android-refresh',
                    text: `工作流`,
                    order: 1,
                    status: "2",
                    style: '2',
                    isCollapse: 0,//在外边
                },
            ]
        },
        {
            name: '',
            icon: '',
            text: ``,
            status: "3",
            order: 1,
            style: '2',
            isCollapse: 0,//在外边
            childs: [
                {
                    name: '',
                    icon: '',
                    text: '',
                    order: 1,
                    status: "3",
                    style: '2',
                    isCollapse: 0,//在外边
                    childs: [
                        {
                            name: 'prevpage',
                            icon: 'ion-android-arrow-back',
                            text: `前一`,
                            order: 1,
                            status: "2",
                            style: '2',
                            isCollapse: 0,//在外边
                        },
                        {
                            name: 'nextpage',
                            icon: 'ion-android-arrow-forward',
                            text: `后一`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 0,//在外边
                        },
                        {
                            name: 'firstpage',
                            icon: 'ion-skip-backward',
                            text: `首张`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 1,//隐藏
                        },
                        {
                            name: 'lastpage',
                            icon: 'ion-skip-forward',
                            text: `末张`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 1,//隐藏
                        },
                    ]
                },
                {
                    name: '',
                    icon: '',
                    text: '',
                    order: 1,
                    status: "3",
                    style: '2',
                    isCollapse: 0,//在外边
                    childs: [
                        {
                            name: 'export',
                            icon: 'ion-arrow-up-a',
                            text: `导出`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 0,//在外边
                        },
                        {
                            name: 'import',
                            icon: 'ion-arrow-down-a',
                            text: `导入`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 0,//隐藏
                        },
                    ]
                },
            ]
        },
        {
            name: '',
            icon: '',
            text: ``,
            status: "3",
            order: 1,
            style: '2',
            isCollapse: 0,//在外边
            childs: [
                {
                    name: '',
                    icon: '',
                    text: '',
                    order: 1,
                    status: "3",
                    style: '2',
                    isCollapse: 0,//在外边
                    childs: [
                        {
                            name: 'print',
                            icon: 'ion-android-print',
                            text: `打印`,
                            order: 1,
                            status: "2",
                            style: '2',
                            isCollapse: 0,//在外边
                        },
                        {
                            name: 'preview',
                            icon: 'ion-ios-eye',
                            text: `预览`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 1,//在外边
                        },
                        {
                            name: 'design',
                            icon: 'ion-social-designernews',
                            text: `设计`,
                            order: 2,
                            status: "2",
                            style: '1',
                            isCollapse: 0,//隐藏
                        },
                    ]
                },
                {
                    name: 'list',
                    icon: 'ion-android-list',
                    text: `列表`,
                    order: 2,
                    status: "2",
                    style: '1',
                    isCollapse: 0,//在外边
                },
                {
                    name: 'settings',
                    icon: 'ion-gear-b',
                    text: `配置`,
                    order: 2,
                    status: "2",
                    style: '1',
                    isCollapse: 0,//在外边
                },
                {
                    name: 'exit',
                    icon: 'ion-android-exit',
                    text: `退出`,
                    order: 2,
                    status: "2",
                    style: '1',
                    isCollapse: 0,//在外边
                },
            ]
        },
    ]
}