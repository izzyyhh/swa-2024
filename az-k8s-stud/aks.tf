resource "azurerm_kubernetes_cluster" "aks-swa-001" {
  name                = "aks-swa-001"
  location            = azurerm_resource_group.rg-k8s.location
  resource_group_name = azurerm_resource_group.rg-k8s.name
  dns_prefix          = "aks-swa-001"
  kubernetes_version  = "1.27"

  default_node_pool {
    name       = "default"
    node_count = 1
    vm_size    = "Standard_B2s"
  }

  identity {
    type = "SystemAssigned"
  }
}
