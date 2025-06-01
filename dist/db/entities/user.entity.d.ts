import { BaseEntity } from './common/base.entity';
export declare class User extends BaseEntity {
    full_name: string;
    email: string;
    password_hash: string;
    is_verified: boolean;
    otp_code: string;
}
