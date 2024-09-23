import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import style from "./profile.module.css";
import { getUser } from "./_lib/getUsers";
import { getUserPosts } from "./_lib/getUserPosts";
import UserInfo from "./_components/UserInfo";
import UserPosts from "./_components/UserPosts";

type Props = {
  params: { username: string };
};

export default async function page({ params }: Props) {
  const { username } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["users", username], queryFn: getUser });
  await queryClient.prefetchQuery({ queryKey: ["posts", "users", username], queryFn: getUserPosts });

  const dehydratedState = dehydrate(queryClient);
  return (
    <div className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <UserInfo username={username} />
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
