module.exports = Object.freeze({
    TOURNAMENT_MENU: {
        title: "Giải đấu",
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
        title: "Đội thi đấu",
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
