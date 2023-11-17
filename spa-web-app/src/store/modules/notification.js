// store/modules/counterModule.js
export default {
    namespaced: true, // Ensures that actions, mutations, and getters are scoped to the module
    state: {
        isUnread: true,
        notifications: [
            {
                title: "Chức năng mới",
                content: ` + Thay đổi bảng giá giải đấu. Nhấn vào đây để xem chi tiết \n + Cho phép bật chế độ dấu Nhánh Thắng - Nhánh Thua ở thể thức chia Bảng Đấu.\n + FootballLegend Shop - Tận hưởng mua sắm dụng cụ, đồ dùng thể thao ...v.v.\n + Hệ thống xếp hạng các đội có thành tích cao trên FootballLegend.vn. Nhấn vào đây để xem chi tiết.\n + Người dùng có thể chỉnh sửa màu sắc tùy ý theo phong cách của giải đấu.\n + Tải về tệp tin Excel để báo cáo thu/chi quỹ đội. `
            },
            {
                title: "Chức năng mới",
                content: ` + Thay đổi bảng giá giải đấu. Nhấn vào đây để xem chi tiết \n + Cho phép bật chế độ dấu Nhánh Thắng - Nhánh Thua ở thể thức chia Bảng Đấu.\n + FootballLegend Shop - Tận hưởng mua sắm dụng cụ, đồ dùng thể thao ...v.v.\n + Hệ thống xếp hạng các đội có thành tích cao trên FootballLegend.vn. Nhấn vào đây để xem chi tiết.\n + Người dùng có thể chỉnh sửa màu sắc tùy ý theo phong cách của giải đấu.\n + Tải về tệp tin Excel để báo cáo thu/chi quỹ đội. `
            },
            {
                title: "Chức năng mới",
                content: ` + Thay đổi bảng giá giải đấu. Nhấn vào đây để xem chi tiết \n + Cho phép bật chế độ dấu Nhánh Thắng - Nhánh Thua ở thể thức chia Bảng Đấu.\n + FootballLegend Shop - Tận hưởng mua sắm dụng cụ, đồ dùng thể thao ...v.v.\n + Hệ thống xếp hạng các đội có thành tích cao trên FootballLegend.vn. Nhấn vào đây để xem chi tiết.\n + Người dùng có thể chỉnh sửa màu sắc tùy ý theo phong cách của giải đấu.\n + Tải về tệp tin Excel để báo cáo thu/chi quỹ đội. `
            }
        ]
    },

    mutations: {
        confirmThatNotificationHaveRead(state) {
            state.isUnread = false;
        },
        DECREMENT(state) {
            state.count--;
        },
    },

    actions: {
        increment({ commit }) {
            commit('INCREMENT');
        },
        decrement({ commit }) {
            commit('DECREMENT');
        },
    },

    getters: {
        notifications(state) {
            return state.notifications
        },
        isNotificationActive(state) {
            return state.notifications.length > 0;
        },
        notificationLength(state){
            return state.notifications.length
        },
        isUnreadNotifycations(state) {
            return state.isUnread
        }
    },
};
