export interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const steps: Step[] = [
  {
    number: "01",
    title: "收录岗位",
    description: "一键导入 JD，AI 自动解析关键信息。支持手动录入和批量导入。",
    icon: "search",
  },
  {
    number: "02",
    title: "AI 赋能",
    description: "AI 帮你优化简历、模拟面试、分析薪资、撰写感谢信，全程陪伴。",
    icon: "sparkles",
  },
  {
    number: "03",
    title: "拿下 Offer",
    description: "科学管理求职进度，对比 Offer，做出最适合你的选择。",
    icon: "trophy",
  },
];
