export interface AppContextInterface {
  config: {
    LMS_BASE_URL: string,
    LOGO_WHITE_URL: string,
    SITE_NAME: string,
  },
  authenticatedUser: {
    username: string,
  }
}
