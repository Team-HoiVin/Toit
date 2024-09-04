//자식 컴포넌트 타입
export type ServerPageProps<T = { id?: string }> = {
  params: T;
  searchParams: Record<string, any>;
};
