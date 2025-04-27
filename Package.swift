// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorBridge",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorBridge",
            targets: ["CustomBridgePlugInPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "CustomBridgePlugInPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CustomBridgePlugInPlugin"),
        .testTarget(
            name: "CustomBridgePlugInPluginTests",
            dependencies: ["CustomBridgePlugInPlugin"],
            path: "ios/Tests/CustomBridgePlugInPluginTests")
    ]
)