module.exports = Object.freeze({
    TOURNAMENT_MENU: {
        title: "nav_tournament",
        menu: [
            {
                name: "Tạo giải đấu",
                path: "league/create-tournament",
            },
            {
                name: "Tìm giải đấu",
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
});
