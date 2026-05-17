export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "多账号管理",
    description: "集中管理多个求职账号和平台，一键切换，高效投递。",
    icon: "building",
  },
  {
    title: "岗位追踪看板",
    description: "看板式管理求职进度，拖拽操作，状态一目了然。",
    icon: "layout",
  },
  {
    title: "AI 简历优化",
    description: "AI 智能分析简历内容，针对岗位要求提供精准优化建议。",
    icon: "file-text",
  },
  {
    title: "AI 面试模拟",
    description: "AI 模拟面试官，根据岗位生成定制面试题，实战演练。",
    icon: "message-circle",
  },
  {
    title: "Offer 对比",
    description: "多维度对比 Offer，薪资福利、发展空间科学决策。",
    icon: "scale",
  },
  {
    title: "工作日历",
    description: "面试、截止日期、日程集中管理，不再错过重要节点。",
    icon: "calendar",
  },
  {
    title: "AI 职业规划",
    description: "AI 分析技能和兴趣，推荐职业方向和技能提升路径。",
    icon: "compass",
  },
  {
    title: "数据统计",
    description: "可视化求职数据，追踪投递效果，发现优化空间。",
    icon: "chart-bar",
  },
];
