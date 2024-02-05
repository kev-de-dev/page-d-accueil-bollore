# ConfigureNetwork.ps1

param(
    [int]$InterfaceIndex,
    [string]$SubnetMask,
    [string]$Gateway,
    [string[]]$DnsServers,
    [string[]]$DnsSuffixes
)

# Configuration des serveurs DNS
Set-DnsClientServerAddress -InterfaceIndex $InterfaceIndex -ServerAddresses $DnsServers

# Configuration des suffixes DNS
foreach ($dnsSuffix in $DnsSuffixes) {
    Add-DnsClientNrptRule -Namespace $dnsSuffix -InterfaceIndex $InterfaceIndex
}

Write-Host "Configuration réseau terminée."
