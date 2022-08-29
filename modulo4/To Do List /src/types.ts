export type NewUser = {
    name: string;
    nickname: string;
    email: string;
}

export type NewTask = {
    title: string;
    description: string;
    limit_date: Date;
    creator_user_id: Number;
}

export type NewResponsiblesForTasks = {
    responsible_user_id: Number;
    task_id: Number;
}