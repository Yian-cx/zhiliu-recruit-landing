export interface Stat {
  value: string;
  label: string;
  target: number;
}

export const stats: Stat[] = [
  { value: "10,000+", label: "AI 生成面试题", target: 10000 },
  { value: "50,000+", label: "已追踪岗位", target: 50000 },
  { value: "95%", label: "用户满意度", target: 95 },
  { value: "3x", label: "面试邀约率提升", target: 3 },
];
