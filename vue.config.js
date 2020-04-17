module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  devServer: {
    before(app){
        app.get("/api/login", function(req, res) {
            const { username, password } = req.query;
            if(username == 'shery' && password == '123456ccc'){
                res.json({code: 1, token: 'jilei'})
            }else {
                res.status(401).json({code: 0, message: '用户名或密码有误'});
            }
        });

        app.get("/api/goodsinfo", function(req, res) {
            const data = {
                code: 1,
                slider: [
                    {
                        url:'/',
                        image: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/xcx/b63bbb503ad23cb337e6b26fc55eb7a1'
                    }, {
                        url: '/',
                        image: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/xcx/7eec93fcde1885e2396ce91e6e9b6aa7'
                    }, {
                        url: '/',
                        image: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/xcx/ccdd8e9802b098da55b291fa78d5b97a'
                    }
                ],
                keys: ['goods1','goods2','goods3','goods4'],
                datalist: {
                    goods1: [
                        {
                            goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                            goods_title:'针织衫高领',
                            goods_price: 164,
                            remain_num: 24
                        }, {
                            goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                            goods_title: '针织衫高领',
                            goods_price: 164,
                            remain_num: 24
                        }, {
                            goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                            goods_title: '针织衫高领',
                            goods_price: 164,
                            remain_num: 24
                        }, {
                            goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                            goods_title: '针织衫高领',
                            goods_price: 164,
                            remain_num: 24
                        },
                    ],
                    goods2: [{
                        goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                        goods_title: '针织衫高领2',
                        goods_price: 230,
                        remain_num: 24
                    }, {
                        goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                        goods_title: '针织衫高领2',
                        goods_price: 230,
                        remain_num: 24
                    }, {
                        goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                        goods_title: '针织衫高领2',
                        goods_price: 230,
                        remain_num: 24
                    }, {
                        goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                        goods_title: '针织衫高领2',
                        goods_price: 230,
                        remain_num: 24
                    }, ],
                    goods3: [{
                        goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                        goods_title: '针织衫高领3',
                        goods_price: 230,
                        remain_num: 24
                    }, {
                        goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                        goods_title: '针织衫高领3',
                        goods_price: 230,
                        remain_num: 24
                    }, {
                        goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                        goods_title: '针织衫高领3',
                        goods_price: 230,
                        remain_num: 24
                    }, {
                        goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                        goods_title: '针织衫高领3',
                        goods_price: 230,
                        remain_num: 24
                    }, ],
                    goods4: [{
                        goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                        goods_title: '针织衫高领3',
                        goods_price: 230,
                        remain_num: 24
                    }, {
                        goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                        goods_title: '针织衫高领3',
                        goods_price: 230,
                        remain_num: 24
                    }, {
                        goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                        goods_title: '针织衫高领3',
                        goods_price: 230,
                        remain_num: 24
                    }, {
                        goods_pic: 'https://cdnskx.oss-cn-beijing.aliyuncs.com/upload/goods/20191204/main_44ca935219a8db24ea46012d3743ebc4',
                        goods_title: '针织衫高领3',
                        goods_price: 230,
                        remain_num: 24
                    }, ],
                },
            };
            res.json(data);
        });

        app.get('/api/carts', (req, res) => {
            const list = Array.from(10).map((n, i)=> {
                return {title: `商品${n}`, price: (i+1)*10}
            })
            const data = {
                code: 1,
                list: list,
                msg: ''
            };
            res.json(data);
        })
    }
  },
}
