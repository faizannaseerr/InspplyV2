import { supabaseClient } from "./supabaseClient";

export const getUserInfo = async ({ userId, token }: { userId: string; token: string }) => {
    const supabase = await supabaseClient(token);
    const { data: userInfo } = await supabase
        .from("Users")
        .select("*")
        .eq("user_id", userId);
    return userInfo;
};