import UserNotifications
import Foundation

/// Schedules 20 local payment notifications, one per second, on app launch.
final class NotificationManager {
    static let shared = NotificationManager()

    private init() {}

    /// Requests notification permission then schedules the 20 payment notifications.
    func requestPermissionAndSchedule() {
        UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge]) { [weak self] granted, _ in
            guard granted else { return }
            self?.schedulePaymentNotifications()
        }
    }

    private func schedulePaymentNotifications() {
        let center = UNUserNotificationCenter.current()
        center.removeAllPendingNotificationRequests()

        for index in 1...20 {
            let content = UNMutableNotificationContent()
            content.title = "Stripe"
            content.body = "You have received a payment of $428.00 for 1 item"
            content.sound = .default

            let trigger = UNTimeIntervalNotificationTrigger(
                timeInterval: TimeInterval(index),
                repeats: false
            )
            let request = UNNotificationRequest(
                identifier: "stripe-payment-\(index)",
                content: content,
                trigger: trigger
            )
            center.add(request)
        }
    }
}
