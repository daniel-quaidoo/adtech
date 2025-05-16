

export class UserCredentialsDto {
    user_credentials_id: string;
  
    user_id: string; // Reference to the linked User
  
    password?: string;
    login_provider?: string;
    verification_token?: string;
    reset_token?: string;
    is_subscribed_token?: string;
  
    is_disabled: boolean;
    is_verified: boolean;
    is_subscribed: boolean;
    is_onboarded: boolean;
    is_approved: boolean;
    is_rejected: boolean;
  
    last_login_time?: Date;
    current_login_time?: Date;
  
    created_at: Date;
    updated_at: Date;
  }