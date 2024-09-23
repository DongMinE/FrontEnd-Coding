"use client";

import { HashTag } from "@/model/HashTag";
import { useQuery } from "@tanstack/react-query";
import Trend from "../../_component/Trend";
import { getTrends } from "../../home/_lib/getTrends";

export default function TrendSection() {
  const { data } = useQuery<HashTag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60 * 1000, // 1분 , fresh -> stale
    gcTime: 300 * 1000,
  });
  return data?.map((trend) => <Trend trend={trend} key={trend.tagId} />);
}
