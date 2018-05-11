import Fetch from '@fetch';
import Storage from '@tools/storage';

const actions = {
    initState: () => {
        //初始化，加载菜单 和 用户信息
        return {
            type: 'initState'
        }
    },
    //添加loading页面效果
    addLoading: () => {
        return {
            type: 'addLoading'
        }
    },
    //移除loading页面效果
    removeLoading: () => {
        return {
            type: 'removeLoading'
        }
    },
    //添加gritter提示
    addGritter: (options) => {
        return {
            type: 'addGritter',
            options: options
        }
    },
    //错误提示
    errorGritter: (options, pos) => {
        console.log(options)
        if (options.code === '9999') {
            // alert('系统错误~请联系系统管理员！');
        }
        return {
            type: 'errorGritter',
            options: {
                text: options.desc,
                position: pos ? 'center' : ''
            }
        }
    },
    //移除gritter提示
    removeGritter: () => {
        return {
            type: 'removeGritter'
        }
    },
    //提示dialog弹出框
    addDialog: (options) => {
        return {
            type: 'addDialog',
            options: options
        }
    },
    //移除dialog弹出框
    removeDialog: () => {
        return {
            type: 'removeDialog'
        }
    },
    loadData: (url) => {
        return async(dispatch, getState) => {
            dispatch(actions.addLoading());

            const param = getState().reducers.param;
            let commonProjectId = Storage.get('key');
            param.appId = commonProjectId;
            const val = await Fetch({
                url: url,
                method: 'POST',
                param: param
            });

            dispatch(actions.removeLoading());

            if (val.msg.code == '0000') {
                dispatch({
                    type: 'loadData',
                    result: val
                })
            } else {
                dispatch(actions.errorGritter(val))
            }

        }
    },
    updateState: (state) => {
        return {
            type: 'updateState',
            state: state
        }
    },
    doubleChange: (i, key, event) => {
        return async(dispatch, getState) => {
            let active = getState().reducers.active;
            active[i] = active[i] ? active[i] : {};
            active[i][key] = active[i][key] ? 0 : 1;

            return dispatch({
                type: 'doubleChange',
                active: active
            })
        }
    },
    // 改变excel里面值
    changeExcelData: (i, key, event) => {
        return async(dispatch, getState) => {
            let excelDocLists = getState().reducers.excelDocLists;
            excelDocLists[i][key] = event.target.value;

            return dispatch({
                type: 'changeExcelData',
                excelDocLists: excelDocLists
            })
        }
    }
}

export default actions;