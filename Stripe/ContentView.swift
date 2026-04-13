import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 20) {
                Spacer()
                NoDataView()
                Spacer()
            }
            .navigationTitle("Stripe")
            .navigationBarTitleDisplayMode(.large)
        }
        .navigationViewStyle(.stack)
    }
}

/// A replaceable "no data" placeholder view.
///
/// To use a custom icon, add your image to `Assets.xcassets/NoDataIcon.imageset`
/// (any resolution / vector PDF). The view automatically uses it when present;
/// otherwise it falls back to the system `tray` SF Symbol.
struct NoDataView: View {
    var body: some View {
        VStack(spacing: 12) {
            noDataIcon
                .frame(width: 120, height: 120)
                .foregroundColor(.secondary)

            Text("No Data")
                .font(.subheadline)
                .foregroundColor(.secondary)
        }
    }

    @ViewBuilder
    private var noDataIcon: some View {
        if UIImage(named: "NoDataIcon") != nil {
            // Custom icon — replace Assets.xcassets/NoDataIcon.imageset to customize
            Image("NoDataIcon")
                .resizable()
                .scaledToFit()
        } else {
            // Default fallback — add an image to NoDataIcon.imageset to customize
            Image(systemName: "tray")
                .resizable()
                .scaledToFit()
        }
    }
}

#Preview {
    ContentView()
}
