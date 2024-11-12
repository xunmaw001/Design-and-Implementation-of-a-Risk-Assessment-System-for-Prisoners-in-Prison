const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                   
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"囚犯事迹类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryQiufanshiji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"宣传类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryXuanchuan"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"宣传管理",
                        "menuJump":"列表",
                        "tableName":"xuanchuan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"宣传收藏管理",
                        "menuJump":"列表",
                        "tableName":"xuanchuanCollection"
                    }
                ],
                "menu":"宣传管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"囚犯管理",
                        "menuJump":"列表",
                        "tableName":"qiufan"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"囚犯评估管理",
                        "menuJump":"列表",
                        "tableName":"qiufanpinggu"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "报表",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"囚犯事迹管理",
                        "menuJump":"列表",
                        "tableName":"qiufanshiji"
                    }
                ],
                "menu":"囚犯管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"狱警管理",
                        "menuJump":"列表",
                        "tableName":"yujing"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"囚犯管理",
                        "menuJump":"列表",
                        "tableName":"qiufan"
                    }
                ],
                "menu":"囚犯管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"囚犯评估管理",
                        "menuJump":"列表",
                        "tableName":"qiufanpinggu"
                    }
                ],
                "menu":"囚犯评估管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"囚犯事迹管理",
                        "menuJump":"列表",
                        "tableName":"qiufanshiji"
                    }
                ],
                "menu":"囚犯事迹管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"狱警",
        "tableName":"yujing"
    }
]
    }
}
export default menu;