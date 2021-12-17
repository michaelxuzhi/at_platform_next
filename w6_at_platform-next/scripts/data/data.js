// 新格式
let guide = {
  name: '新手指引',
  detail: [
    {
      parentName: 'guide',
      name: 'get',
      desc: '占领本州所有npc城池',
      author: 'xuzhi',
      time: '20211025',
      params: [
        { params1: '示例参数一' },
        { params2: '示例参数二' },
        { params3: '示例参数三' },
      ],
      example: 'at.guide.get()',
    },
    {
      parentName: 'guide',
      name: 'set',
      desc: '占领本州所有npc城池',
      author: 'xuzhi',
      time: '20211025',
      params: [
        { params1: '示例参数一' },
        { params2: '示例参数二' },
        { params3: '示例参数三' },
      ],
      example: 'at.guide.set()',
    },
  ],
  at_arr: function() {
    let desc = {};
    for (let i = 0; i < this.detail.length; i++) {
      desc[this.detail[i]['name']] = this.detail[i]['desc'];
    }
    return desc;
  },
  at_length: function() {
    return this.detail.length;
  },
};

let guild = {
  name: '国家',
  detail: [
    {
      parentName: 'guild',
      name: 'att_army_name',
      desc: '攻击方部队名称',
      author: 'xuzhi',
      time: '20211025',
      params: [
        { params1: '示例参数一' },
        { params2: '示例参数二' },
        { params3: '示例参数三' },
      ],
      example: 'at.guild.get()',
    },
    {
      parentName: 'guild',
      name: 'occupy_grid',
      desc: '占领本州所有npc城池',
      author: 'xuzhi',
      time: '20211025',
      params: [
        { params1: '示例参数一' },
        { params2: '示例参数二' },
        { params3: '示例参数三' },
      ],
      example: 'at.guild.get()',
    },
    {
      parentName: 'guild',
      name: 'occupy_map',
      desc: '占领本州地图资源',
      author: 'xuzhi',
      time: '20211025',
      params: [
        { params1: '示例参数一' },
        { params2: '示例参数二' },
        { params3: '示例参数三' },
      ],
      example: 'at.guild.occupy_map()',
    },
    {
      parentName: 'guild',
      name: 'create',
      desc: '创建国家',
      author: 'xuzhi',
      time: '20211025',
      params: [
        { params1: '示例参数一' },
        { params2: '示例参数二' },
        { params3: '示例参数三' },
      ],
      example: 'at.guild.get()',
    },
    {
      parentName: 'guild',
      name: 'full_account',
      desc: '满级号',
      author: 'xuzhi',
      time: '20211025',
      params: [
        { params1: '示例参数一' },
        { params2: '示例参数二' },
        { params3: '示例参数三' },
      ],
      example: 'at.guild.set()',
    },
  ],
  at_arr: function() {
    let desc = {};
    for (let i = 0; i < this.detail.length; i++) {
      desc[this.detail[i]['name']] = this.detail[i]['desc'];
    }
    return desc;
  },
  at_length: function() {
    return this.detail.length;
  },
};
let army = {
  name: '部队',
  detail: [
    {
      parentName: 'army',
      name: 'get_time',
      desc: '占领本州所有npc城池',
      author: 'xuzhi',
      time: '20211025',
      params: [
        { params1: '示例参数一' },
        { params2: '示例参数二' },
        { params3: '示例参数三' },
      ],
      example: 'at.army.get()',
    },
    {
      parentName: 'army',
      name: 'occupy_city',
      desc: '占领本州所有npc城池',
      author: 'xuzhi',
      time: '20211025',
      params: [{ params1: '占城1' }, { params2: '占城二' }, { params3: '占城三' }],
      example: 'at.army.set()',
    },
  ],
  at_arr: function() {
    let desc = {};
    for (let i = 0; i < this.detail.length; i++) {
      desc[this.detail[i]['name']] = this.detail[i]['desc'];
    }
    return desc;
  },
  at_length: function() {
    return this.detail.length;
  },
};

let other = {
  name: '其他',
  detail: [
    {
      parentName: 'at',
      name: 'get_time',
      desc: '获取时间',
      author: 'xuzhi',
      time: '20211025',
      // params: [
      //   { params1: '示例参数一' },
      //   { params2: '示例参数二' },
      //   { params3: '示例参数三' },
      // ],
      example: 'at.get()',
    },
    {
      parentName: 'at',
      name: 'set_res',
      desc: '设置资源数量',
      author: 'xuzhi',
      time: '20211025',
      params: [{ params1: '资源名称' }, { params2: '资源数量' }],
      example: 'at.set()',
    },
  ],
  at_arr: function() {
    let desc = {};
    for (let i = 0; i < this.detail.length; i++) {
      desc[this.detail[i]['name']] = this.detail[i]['desc'];
    }
    return desc;
  },
  at_length: function() {
    return this.detail.length;
  },
};

export { army, guild, guide, other };
