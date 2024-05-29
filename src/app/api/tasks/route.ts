import { NextResponse } from "next/server";

export interface Task {
  id: number;
  name: string;
}

const tasks: Task[] = [
  { id: 1, name: "プログラミング" },
  { id: 2, name: "ランニング" },
];

export const GET = async () => {
  return NextResponse.json(
    { tasks },
    {
      status: 200,
    }
  );
};

/**
 * 返却値が毎回異なるような場合は
 * リクエスト毎に動的に実行されるように設定する
 * 「ルートセグメントコンフィグ」
 */
export const dynamic = "force-dynamic";
