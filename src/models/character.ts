export interface CharacterResponse {
    /**
     * 状态码
     */
    code: number;
    /**
     * 信息
     */
    data?: Character;
    [property: string]: any;
}

/**
 * 信息
 *
 * Character
 */
export interface Character {
    /**
     * 头像链接
     */
    avatar: string;
    /**
     * 是否为bot
     */
    is_bot: boolean;
    /**
     * 用户ID
     */
    uid: number;
    /**
     * 用户名
     */
    user_name: string;
    [property: string]: any;
}