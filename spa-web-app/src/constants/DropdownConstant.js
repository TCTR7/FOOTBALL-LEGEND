module.exports = Object.freeze({
    TOURNAMENT_MENU: {
        title: "nav_tournament",
        menu: [
            {
                name: "nav_create_tournament",
                path: "league/create-tournament",
            },
            {
                name: "nav_find_tournament",
                path: "league",
            },
        ],
    },
    TEAM_MENU: {
        title: "nav_team",
        menu: [
            {
                name: "Tạo đội",
                path: "competitor/create",
            },
            {
                name: "Tìm đội",
                path: "competitor",
            },
            {
                name: "Tạo đội hình",
                path: "lineup",
            }
        ],
    },
    LANGUAGE: ['vn','gb']
});
