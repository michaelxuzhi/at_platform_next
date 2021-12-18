// 新格式
let guide = {
  name: '新手指引',
  id: 'guide',
  detail: {
    get: {
      parentName: 'guide',
      name: 'get',
      desc: '占领本州所有npc城池',
      author: 'xuzhi',
      time: '20211025',
      params: [{ params1: '示例参数一' }, { params2: '示例参数二' }],
      example: 'at.guide.get()',
    },
    set: {
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
  },
  at_length: function() {
    return [...Object.keys(this.detail)].length;
  },
};

let guild = {
  name: '国家',
  id: 'guild',
  detail: {
    att_army_name: {
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
    occupy_grid: {
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
    occupy_map: {
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
    create: {
      parentName: 'guild',
      name: 'create',
      desc: '创建国家',
      author: 'xuzhi',
      time: '20211025',
      params: [
        { params1: '示例参数一' },
        { params2: '示例参数二' },
        { params3: '示例参数三' },
        { params4: '示例参数四' },
        { params5: '示例参数五' },
        { params6: '示例参数六' },
      ],
      example: 'at.guild.get()',
    },
    full_account: {
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
  },
  at_length: function() {
    return [...Object.keys(this.detail)].length;
  },
};
let army = {
  name: '部队',
  id: 'army',
  detail: {
    get_time: {
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
    occupy_city: {
      parentName: 'army',
      name: 'occupy_city',
      desc: '占领本州所有npc城池',
      author: 'xuzhi',
      time: '20211025',
      params: [{ params1: '占城1' }, { params2: '占城二' }, { params3: '占城三' }],
      example: 'at.army.set()',
    },
  },
  at_length: function() {
    return [...Object.keys(this.detail)].length;
  },
};

let at = {
  name: '其他',
  id: 'at',
  detail: {
    get_time_other: {
      parentName: 'at',
      name: 'get_time_other',
      desc: '获取时间',
      author: 'xuzhi',
      time: '20211025',
      params: [
        { params1: '示例参数一' },
        { params2: '示例参数二' },
        { params3: '示例参数三' },
      ],
      example: 'at.get()',
    },
    set_res: {
      parentName: 'at',
      name: 'set_res',
      desc: '设置资源数量',
      author: 'xuzhi',
      time: '20211025',
      params: [{ params1: '资源名称' }, { params2: '资源数量' }],
      example: 'at.set()',
    },
  },
  at_length: function() {
    return [...Object.keys(this.detail)].length;
  },
};

export { army, guild, guide, at };
