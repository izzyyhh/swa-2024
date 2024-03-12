Cluster for exercise "Kubernetes on Azure"

```
az login
```

```
terraform init
terraform plan -out plan.cache
terraform apply plan.cache
```

```
kubectl cluster-info
kubectl get namespace
kubectl get node
```

```
terraform destroy
```
