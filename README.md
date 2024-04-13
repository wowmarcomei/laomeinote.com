# website

需要注意的是：
1. 主题使用的是zzo，在CDN上开启了http强制转换https，所以baseurl配置，要修改为`https://xxx.xxx`.
2. 该代码已经在vercel上自动编译成功（https://laomeinote-com-git-main-meixuhong.vercel.app/）.
3. 在`.github/workflow/main.yaml`中修改hugo命令，主要是是Baseurl生效：
```yaml
 run: |
          hugo \
            --minify \
            --baseURL "${{ steps.pages.outputs.base_url }}/"
```
删除其中的`--baseURL "${{ steps.pages.outputs.base_url }}/`参数

4. 在config.toml中更新跨域访问：
```toml
[params]
  [params.headers]
    Access-Control-Allow-Origin = "https://www.laomeinote.com"
```