import RouterConstants from "./RouterConstants";

export const DropdownConstant = Object.freeze({
    TOURNAMENT_MENU: {
        title: "nav_tournament",
        menu: [
            {
                title: "nav_create_tournament",
                path: RouterConstants.LEAGUE_VIEW_NAME + '/' + RouterConstants.CREATE_TOURNAMENT_VIEW_NAME,
                name: RouterConstants.CREATE_TOURNAMENT_VIEW_NAME
            },
            {
                title: "nav_find_tournament",
                path: RouterConstants.LEAGUE_VIEW_NAME,
                name: RouterConstants.LEAGUE_VIEW_NAME
            },
        ],
    },
    TEAM_MENU: {
        title: "nav_team",
        menu: [
            {
                title: "nav_create_team",
                path: RouterConstants.COMPETITOR_VIEW_NAME + '/' + RouterConstants.COMPETITOR_CREATE_VIEW_NAME,
                name: RouterConstants.COMPETITOR_CREATE_VIEW_NAME
            },
            {
                title: "nav_find_team",
                path: RouterConstants.COMPETITOR_VIEW_NAME,
                name: RouterConstants.COMPETITOR_VIEW_NAME
            },
            {
                title: "nav_create_lineup",
                path: RouterConstants.LINEUP_VIEW_NAME,
                name: RouterConstants.LINEUP_VIEW_NAME
            }
        ],
    },
    PROFILE_MENU: {
        title: null,
        menu: [
            {
                name: "nav_account_information",
                path: RouterConstants.ACCOUNT_VIEW_NAME + '/' + RouterConstants.PROFILE_VIEW_NAME,
            },
            {
                name: "nav_account_my_leagues",
                path: RouterConstants.ACCOUNT_VIEW_NAME + '/' + RouterConstants.MYLEAGUE_VIEW_NAME,
            },
            {
                name: "nav_account_my_teams",
                path: RouterConstants.ACCOUNT_VIEW_NAME + '/' + RouterConstants.MYCOMPETITOR_VIEW_NAME,
            },
            {
                name: "nav_account_my_orders",
                path: RouterConstants.ACCOUNT_VIEW_NAME + '/' + RouterConstants.MYORDERS_VIEW_NAME,
            },
            {
                name: "nav_account_logout",
                path: RouterConstants.LOGIN_VIEW_NAME,
            }
        ]
    }
});
